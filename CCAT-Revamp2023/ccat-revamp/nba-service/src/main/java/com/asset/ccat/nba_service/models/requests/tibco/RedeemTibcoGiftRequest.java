package com.asset.ccat.nba_service.models.requests.tibco;

import com.asset.ccat.nba_service.models.requests.tibco.redeemGift.CustomerMarketingProduct;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class RedeemTibcoGiftRequest {
    @JsonProperty("CustomerMarketingProduct")
    public List<CustomerMarketingProduct> customerMarketingProduct;

    public List<CustomerMarketingProduct> getCustomerMarketingProduct() {
        return customerMarketingProduct;
    }

    public void setCustomerMarketingProduct(List<CustomerMarketingProduct> customerMarketingProduct) {
        this.customerMarketingProduct = customerMarketingProduct;
    }
}



