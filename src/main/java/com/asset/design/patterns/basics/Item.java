/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.asset.design.patterns.basics;

/**
 *
 * @author Mahmoud Shehab
 */
public class Item {

        private Integer price;
        private Integer quantity;

        public Item(Integer price, Integer quantity) {
            this.price = price;
            this.quantity = quantity;
        }

        public Integer getPrice() {
            return price;
        }

        public void setPrice(Integer price) {
            this.price = price;
        }

        public Integer getQuantity() {
            return quantity;
        }

        public void setQuantity(Integer quantity) {
            this.quantity = quantity;
        }

    }