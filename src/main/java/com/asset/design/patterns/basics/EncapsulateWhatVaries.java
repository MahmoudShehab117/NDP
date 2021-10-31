/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.design.patterns.basics;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Mahmoud Shehab
 * 
 * encapsulate method level
 * encapsulate class level
 */
public class EncapsulateWhatVaries {

    private Order order;

    public EncapsulateWhatVaries() {

        List items = new ArrayList<Item>();
        items.add(new Item(5, 10));
        items.add(new Item(10, 20));
        order = new Order("EGY");
        order.setItems(items);

    }

    public static void main(String[] args) {
        EncapsulateWhatVaries encapsulateWhatVaries = new EncapsulateWhatVaries();
        Integer total = encapsulateWhatVaries.order.getOrderTotal();
        System.out.print("Total order is " + total);
    }
}
