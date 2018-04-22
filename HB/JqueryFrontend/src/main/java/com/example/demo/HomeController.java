package com.example.demo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController
public class HomeController {
 
    @RequestMapping(value = "/")
    public ModelAndView index() {
        return new ModelAndView("index");
    }
    
    @RequestMapping(value = "/key")
//    @ResponseBody
    public ResponseEntity<String> index2(@RequestParam(value="key") String key) {
       System.out.println("======id==="+key);
       String key1="megh";
//       return id1;
       if(key!=null) {
    	   return new ResponseEntity(key1, HttpStatus.OK);
       }
       return new ResponseEntity(HttpStatus.NO_CONTENT);
    
    }
    
    @RequestMapping(value = "/deleteKey")
    public String deleteUser(@RequestParam(value="key") String key) {
       
       String id1="deleted successfully";
        return id1;
      
      
    }
    
}