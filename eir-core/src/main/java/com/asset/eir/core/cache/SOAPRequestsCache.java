/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.cache;

import com.asset.eir.core.defines.Defines;
import com.asset.eir.core.defines.ErrorCodes;
import com.asset.eir.core.exceptions.EIRException;
import com.asset.eir.core.logger.EIRLogger;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author mahmoud.shehab
 */
@Component
public class SOAPRequestsCache {

    @Autowired
    PropertiesCache propertiesCache;

    private Map<String, String> soapRequestsCache;

    public void init() throws EIRException {
        soapRequestsCache = new HashMap<>();
        File soapRequestsDir = new File(propertiesCache.getGeneral()
                .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.CONFIGURATIONS)
                .get(Defines.NTRA_GENERAL_PROPERTIES_KEYS.SOAP_REQUESTS_TEMPLATES_PATH));
        List<File> files = listFilesForFolder(soapRequestsDir);

        if (files.isEmpty()) {
            EIRLogger.info("No SOAP templates to read");
            throw new EIRException(ErrorCodes.ERROR.NO_TEMPLATES_FOUND, "No Templates Found");
        }

        for (File file : files) {
            try {
                EIRLogger.info("Start reading content from [" + file.getName() + "]");
                String filePath = file.getAbsolutePath();
                String fileName = file.getName().replace(".xml", "");
                String content = new String(Files.readAllBytes(Paths.get(filePath)));
                EIRLogger.info("Finish reading content from [" + file.getName() + "]");
                soapRequestsCache.put(fileName, content);
            } catch (IOException ex) {
                EIRLogger.error("IOException while reading content from [" + file.getName() + "]", ex);
                throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR, "IOException while reading requests templates");
            } catch (Exception ex) {
                EIRLogger.error("Exception while reading content from [" + file.getName() + "]", ex);
                throw new EIRException(ErrorCodes.ERROR.UNKNOWN_ERROR, "IOException while reading requests templates");
            }
        }
    }

    private List<File> listFilesForFolder(final File folder) {
        List<File> fList = null;
        if (folder != null) {
            fList = new ArrayList();
            File[] directory = folder.listFiles();
            if (directory != null) {
                for (final File fileEntry : directory) {
                    if (!fileEntry.isDirectory()) {
                        if (fileEntry.getName().contains(".xml")) {
                            fList.add(fileEntry);
                        }
                    }
                }
            }
        }
        return fList;
    }

    public Map<String, String> getSoapRequestsCache() {
        return soapRequestsCache;
    }
}
