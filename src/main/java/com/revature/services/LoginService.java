package com.revature.services;

import java.security.NoSuchAlgorithmException;

import com.revature.beans.Credentials;
import com.revature.beans.User;
import com.revature.daos.LoginDao;
import com.revature.util.HttpException;

public class LoginService {
	LoginDao loginDao = new LoginDao();
	public static int userId;
	public static int userRoleId;

	public int login(Credentials credentials) throws NoSuchAlgorithmException {
		
		if(credentials.getHashedPassword() == null || credentials.getUsername() == null) {
			throw new HttpException(422);
		}
		
		User user = loginDao.getPasswordByUsername(credentials.getUsername());
	
		if (!user.getPassword().equals(credentials.getHashedPassword())) {
			throw new HttpException(400);
		}
		
		userId = user.getId();
		userRoleId = user.getRole();
		
		return user.getId();
	}
	
	public int getRole(Credentials credentials) throws NoSuchAlgorithmException {
		
		User user = loginDao.getPasswordByUsername(credentials.getUsername());
		
		return user.getRole();
		
	}
	
	public String getFirst_name(Credentials credentials) throws NoSuchAlgorithmException {
		
		User user = loginDao.getPasswordByUsername(credentials.getUsername());
		
		return user.getFirst_name();
		
	}
	
	public String getLast_name(Credentials credentials) throws NoSuchAlgorithmException {
		
		User user = loginDao.getPasswordByUsername(credentials.getUsername());
		
		return user.getLast_name();
		
	}

	public LoginService(LoginDao loginDao) {
		super();
		this.loginDao = loginDao;
	}

	public LoginService() {
		super();
		this.loginDao = new LoginDao();
	}
}
