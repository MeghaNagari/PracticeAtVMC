package javaclasses;

import java.util.Iterator;

import com.google.gson.Gson;
import com.sun.corba.se.impl.orb.ParserTable.TestAcceptor1;

public class UserDaoImpl implements UserDao{

	@Override
	public void add(User user) {
		// TODO Auto-generated method stub
		System.out.println("entered in add user");
		
		Test.li.add(user);
		
		
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		Iterator i=Test.li.iterator();
		User current=new User();
		while(i.hasNext())
		{
			current=(User) i.next();
			if((current.getEmail().equals(user.getEmail())) || (current.getContact().equals(user.getContact())) || (current.getName().equals(user.getEmail())) || (current.getPassword().equals(user.getPassword())))
					{
						
						current.setEmail(user.getEmail());
						current.setContact(user.getContact());
						current.setName(user.getName());
						current.setPassword(user.getPassword());
				System.out.println("Record updated");
				break;
					}
		}
		
		
	}

	@Override
	public void delete(String email) {
		// TODO Auto-generated method stub
		User current=new User();
		Iterator i=Test.li.iterator();
		while(i.hasNext())
		{
          current=(User) i.next();
          if(current.getEmail().equals(email.trim()))
          {
        	 if( Test.li.remove(current));
        	 {  System.out.println("removed successfully current record");
        	 return;
        	 }
          }
          
		}
			
		
		
	}

	@Override
	public User getUser(String email) {
		// TODO Auto-generated method stub
		User currentUser=new User();
		Iterator i=Test.li.iterator();
		while(i.hasNext())
		{
			currentUser=(User) i.next();
			if(currentUser.getEmail()==email.trim())
				break;
		}
		return currentUser;
	}

	
	
	
	
	
	
	
	
	

}
