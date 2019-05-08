package com.revature.services;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import com.revature.beans.Credentials;
import com.revature.beans.User;
import com.revature.daos.SignupDao;

public class CreateUserService {
	
	private SignupDao signupDao = new SignupDao();
		
		public boolean signup(Credentials credentials) throws NoSuchAlgorithmException {
	
			return signupDao.Signup(credentials);
			
			
		}

}
