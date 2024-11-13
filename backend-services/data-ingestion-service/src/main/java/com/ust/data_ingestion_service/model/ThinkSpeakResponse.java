package com.ust.data_ingestion_service.model;

import java.util.List;

public class ThinkSpeakResponse {
    private List<Feed> feeds;

    public List<Feed> getFeeds() {
        return feeds;
    }

    public void setFeeds(List<Feed> feeds) {
        this.feeds = feeds;
    }

    public static class Feed {
        private Double field1;

        public Double getField1() {
            return field1;
        }

        public void setField1(Double field1) {
            this.field1 = field1;
        }
    }
}

