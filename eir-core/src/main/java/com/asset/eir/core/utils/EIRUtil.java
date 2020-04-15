/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.eir.core.utils;

import com.asset.eir.core.annotations.FullStack;
import java.util.List;
import java.util.regex.Pattern;
import org.springframework.stereotype.Component;

/**
 *
 * @author mahmoud.shehab
 */
@Component
public class EIRUtil {

    @FullStack
    public String replaceMultibleValue(String template, List<String> values, String placeHolder) {
        String result = "";
        if (!values.isEmpty()) {
            String subString = template.substring(template.indexOf("$startRepeat$") + 13,
                    template.indexOf("$endRepeat$"));
            StringBuilder stringBuilder = new StringBuilder();

            for (String value : values) {
                String tmp = subString.replace(placeHolder, value);
                stringBuilder.append(tmp);
            }
            result = template
                    .replace("$endRepeat$", "")
                    .replace("$startRepeat$", "")
                    .replace(subString, stringBuilder.toString());

        }
        return result;
    }

    @FullStack
    public String replaceNullableValue(String template, String value, String placeHolder) {
        String result = "";
        if (value == null || "".equals(value)) {
            result = Pattern.compile("\\$startNullable\\$.*endNullable\\$").matcher(template).replaceAll("");
        } else {
            String subString = template.substring(template.indexOf("$startNullable$") + 15,
                    template.indexOf("$endNullable$"));
            StringBuilder stringBuilder = new StringBuilder();

            String tmp = subString.replace(placeHolder, value);
            stringBuilder.append(tmp);

            result = template
                    .replace("$endNullable$", "")
                    .replace("$startNullable$", "")
                    .replace(subString, stringBuilder.toString());

        }
        return result;
    }

}
