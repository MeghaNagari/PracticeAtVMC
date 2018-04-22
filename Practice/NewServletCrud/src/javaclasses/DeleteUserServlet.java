package javaclasses;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DeleteUserServlet extends HttpServlet{
	
	public void doGet(HttpServletRequest req,HttpServletResponse res)
	{
		String email=req.getParameter("email");
		UserDao udao=new UserDaoImpl();
		udao.delete(email);
		System.out.println("email is "+email);
		
	}
	
	
	
	
	

}
