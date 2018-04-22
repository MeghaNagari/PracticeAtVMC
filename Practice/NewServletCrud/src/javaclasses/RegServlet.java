package javaclasses;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter pw = response.getWriter();
		String name = request.getParameter("name");
		String password = request.getParameter("password");
		String contact=request.getParameter("contact");
		String email=request.getParameter("email");
		User user=new User();
		user.setName(name);
		user.setContact(contact);
		user.setEmail(email);
		user.setPassword(password);
		
		UserDao udao=new UserDaoImpl();
		udao.add(user);
		
		RequestDispatcher dispatcher=request.getRequestDispatcher("WEB-INF/RegSucc.html");
		dispatcher.forward(request, response);
		
		
		
	}
		
		protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);

	}
}
