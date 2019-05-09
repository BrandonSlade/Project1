package com.revature.servlets;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.servlets.DefaultServlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Credentials;
import com.revature.beans.User;
import com.revature.services.LoginService;
import com.revature.util.HttpException;

public class LoginServlet extends DefaultServlet {

	LoginService loginService = new LoginService();
	
	@Override
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.addHeader("Access-Control-Allow-Headers", "content-type");
		response.addHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
		super.service(request, response);
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		ObjectMapper om = new ObjectMapper();
		Credentials credentials = om.readValue(request.getInputStream(), Credentials.class);
		
		Integer id = null;
		Integer role = null;
		String first_name = "";
		String last_name = "";
		try {
			id = this.loginService.login(credentials);
			role = this.loginService.getRole(credentials);
			first_name = this.loginService.getFirst_name(credentials);
			last_name = this.loginService.getLast_name(credentials);
		} catch (HttpException e) {
			response.setStatus(e.getStatus());
			return;
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		String cache = id + " " + credentials.getUsername() + " " + first_name + " " + last_name + " " + role;
		
		HttpSession session = request.getSession(true);
		session.setAttribute("id", id);
		//session.setAttribute("role", role);
		om.writeValue(response.getOutputStream(),cache);
	}
}
