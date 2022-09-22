package com.catfish.diet.web.Controller;


import com.catfish.diet.web.SearchKeyword;
import com.catfish.diet.web.service.GetDietService;
import com.catfish.diet.web.service.GetFoodService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.tags.Param;

import java.io.IOException;

@RestController // @Controller 에 @ResponseBody가 추가된 어노테이션으로 JSON형태로 객체 데이터를 반환하게 해준다.
public class GetDietController {

    @GetMapping("/api/getDiet") // URL주소 연결
    public String getDietList(@RequestParam String keyword) {
        String result = "바나나칩";

        try {
            result = GetDietService.getDietList(keyword);
        } catch (Exception e)
        {
            System.out.println("Error");
        }
        return result;
    }


    @GetMapping("/api/getFood")
    public String getFoodList(@RequestParam String keyword) {
        String result = "바나나칩";

        try {
            result = GetFoodService.getFoodList(keyword);
        } catch (Exception e)
        {
            System.out.println("Error");
        }
        return result;
    }

    @PostMapping(path ="/api/putDiet")
    public String putDietList(@RequestBody SearchKeyword searchKeyword) {
        String result = "바나나칩";

        try {
            result = GetDietService.getDietList(searchKeyword.getKeyword());
            System.out.println(searchKeyword.getKeyword());
        } catch (Exception e)
        {
            System.out.println("에러:" +e);
        }

        return "/join";
    }


}
