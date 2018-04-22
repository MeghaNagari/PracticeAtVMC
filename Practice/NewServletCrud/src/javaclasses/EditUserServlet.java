package javaclasses;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

public class EditUserServlet extends HttpServlet{
	
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws ServletException, IOException
	{
		String email=req.getParameter("email");
		System.out.println("email received"+email);
		UserDao udao=new UserDaoImpl();
		User current=udao.getUser(email);
		String json = new Gson().toJson(current);

	    res.setContentType("application/json");
	    res.setCharacterEncoding("UTF-8");
	    res.getWriter().write(json);
		
		
		
		
//		RequestDispatcher view = req.getRequestDispatcher("/WEB-INF/EditUser.html");
//		req.setAttribute("email",email);
//		 view.forward(req, res);
		
	}

}
