package com.catfish.diet.web.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

public class GetFoodService {

    public static String getFoodList(String keyword) throws IOException {
        String serviceUrl = "http://openapi.foodsafetykorea.go.kr/api";
        String key = "2b29b802f1e3427b97d6";
        keyword = keyword.replace(" ", "");

        StringBuilder urlBuilder = new StringBuilder(serviceUrl); /*URL*/
        urlBuilder.append("/" +  key); /*Service Key*/
        urlBuilder.append("/" + "I2790");
        urlBuilder.append("/" + "json"); /*응답데이터 형식(xml/json) Default: xml*/
        urlBuilder.append("/" +  "1");
        urlBuilder.append("/" +  "20");
        urlBuilder.append("/" +  "DESC_KOR=" +keyword );
//        urlBuilder.append("&" + URLEncoder.encode("desc_kor","UTF-8") + "=" + URLEncoder.encode(keyword, "UTF-8")); /*식품이름*/
//        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8")); /*페이지번호*/
//        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("10", "UTF-8")); /*한 페이지 결과 수*/
//        urlBuilder.append("&" + URLEncoder.encode("bgn_year","UTF-8") + "=" + URLEncoder.encode("2017", "UTF-8")); /*구축년도*/
//        urlBuilder.append("&" + URLEncoder.encode("animal_plant","UTF-8") + "=" + URLEncoder.encode("(유)돌코리아", "UTF-8")); /*가공업체*/

//        urlBuilder = new StringBuilder("http://openapi.foodsafetykorea.go.kr/api/2b29b802f1e3427b97d6/I2790/json/1/10/DESC_KOR=이클립스");
        System.out.println(urlBuilder);

        URL url = new URL(urlBuilder.toString());

        System.out.println(url);

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");

        System.out.println("Response code: " + conn.getResponseCode());

        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        System.out.println(sb.toString());
        return sb.toString();


    }
}
