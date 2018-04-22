package javaclasses;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UpdateUserServlet extends HttpServlet {
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException
	{
		String name=req.getParameter("name");
		String email=req.getParameter("email");
		String contact=req.getParameter("contact");
		String password=req.getParameter("password");
		User user=new User();
		user.setEmail(email);
		user.setContact(contact);
		user.setName(name);
		user.setPassword(password);
		
		
		
		UserDao udao=new UserDaoImpl();
		udao.update(user);
		PrintWriter pw=res.getWriter();
		pw.println("thank you,your record has been updated");
		
		
	}

	
	
	
}
