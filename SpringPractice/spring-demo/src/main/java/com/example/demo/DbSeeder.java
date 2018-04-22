package com.example.demo;

import java.awt.List;
import java.util.ArrayList;

import org.assertj.core.util.Arrays;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DbSeeder implements CommandLineRunner {

	private HotelRepository hotelRepository;
	
	
	
	public DbSeeder(HotelRepository hotelRepository) {
		super();
		this.hotelRepository = hotelRepository;
	}



	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Review r1=new Review("john",130,false);
		Review r2=new Review("mary",330,true);
		ArrayList<Review> li=new ArrayList<Review>();
		li.add(r1);
		li.add(r2);
		Hotel marriott=new Hotel("Marriott",130,new Address("paris","france"),li);
		
		Review r3=new Review("megha",1230,true);
//		Review r4=new Review("ram",330,false);
		ArrayList<Review> li2=new ArrayList<Review>();
		li2.add(r3);
		
		Hotel taj=new Hotel("Taj",130,new Address("hyderabad","india"),li2);
		
		//drop all hotels
		
		
		this.hotelRepository.deleteAll();
		
		
		ArrayList<Hotel> hotels=new ArrayList();
		hotels.add(marriott);
		hotels.add(taj);
		this.hotelRepository.saveAll(hotels);
		
		
	}

}
