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
 */
public class Order {

        private List items;
        private String country;

        public Order(String country) {
            this.items = new ArrayList<Item>();
            this.country = country;
        }

        public List getItems() {
            return items;
        }

        public void setItems(List items) {
            this.items = items;
        }

        public int getOrderTotal() {
            int total = 0;
            for (Object obj : items) {
                Item item = (Item) obj;
                total += item.getPrice() * item.getQuantity();
            }
            total += total * getTax(country);
            return total;
        }

        public double getTax(String country) {
            double tax = 0;
            if (country == "EGY") {
                tax = 0.14;
            } else {
                tax = 0.3;
            }
            return tax;
        }
    }