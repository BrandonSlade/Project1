package com.revature.daos;

import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.revature.beans.Credentials;
import com.revature.util.ConnectionUtil;

public class SignupDao {
	public boolean Signup(Credentials credentials) throws NoSuchAlgorithmException {
		try (Connection conn = ConnectionUtil.getConnection()) {
			String sql = "INSERT INTO ers_users (ers_username, ers_password, user_first_name, user_last_name, user_email, user_role_id) VALUES (?, ?, ?, ?, ?, ?)";
			PreparedStatement ps = conn.prepareStatement(sql);
			
			// Assigning parameters
			ps.setString(1, credentials.getUsername());
			ps.setString(2, credentials.getHashedPassword());
			ps.setString(3, credentials.getFirst_name());
			ps.setString(4, credentials.getLast_name());
			ps.setString(5, credentials.getEmail());
			ps.setLong(6, credentials.getRole());
			
			ps.executeUpdate();
			return true;
		} catch(SQLException e) {
			e.printStackTrace();
			return false;
		}
	}
}
