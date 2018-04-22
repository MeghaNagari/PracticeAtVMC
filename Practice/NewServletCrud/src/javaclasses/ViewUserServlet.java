package javaclasses;

import java.io.Console;
import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

public class ViewUserServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException
	{
		System.out.println("entered in view user servlet");
		String email=req.getParameter("email");
		User user=new User();
		UserDao udao=new UserDaoImpl();
		user=udao.getUser(email);
		
		String json = new Gson().toJson(user);

	    res.setContentType("application/json");
	    res.setCharacterEncoding("UTF-8");
	    res.getWriter().write(json);
		
	}

}
