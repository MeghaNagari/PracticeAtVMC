package javaclasses;
import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ViewUserHtml extends HttpServlet {

	public void doGet(HttpServletRequest req,HttpServletResponse res) throws ServletException, IOException
	{

		System.out.println("im in view user html");
		RequestDispatcher dis=req.getRequestDispatcher("/WEB-INF/ViewUser.html");
		dis.forward(req, res);
	}
	
}
