package com.asset.ccat.gateway.models.requests.admin.service_offering_plans;

import com.asset.ccat.gateway.models.requests.BaseRequest;

import java.util.List;

public class AddServiceOfferingPlanRequest extends BaseRequest {

    private Integer planId;

    private String planName;

    private List<Integer> serviceOfferingPlanBits;


    public AddServiceOfferingPlanRequest(Integer planId, String planName, List<Integer> serviceOfferingPlanBits) {
        this.planId = planId;
        this.planName = planName;
        this.serviceOfferingPlanBits = serviceOfferingPlanBits;
    }

    public AddServiceOfferingPlanRequest() {
    }

    public Integer getPlanId() {
        return planId;
    }

    public void setPlanId(Integer planId) {
        this.planId = planId;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public List<Integer> getServiceOfferingPlanBits() {
        return serviceOfferingPlanBits;
    }

    public void setServiceOfferingPlanBits(List<Integer> serviceOfferingPlanBits) {
        this.serviceOfferingPlanBits = serviceOfferingPlanBits;
    }

    @Override
    public String toString() {
        return "AddServiceOfferingPlanRequest{" +
                "planId=" + planId +
                ", planName='" + planName + '\'' +
                ", serviceOfferingPlanBits=" + serviceOfferingPlanBits +
                '}';
    }
}
