package com.revature.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.revature.beans.User;
import com.revature.util.ConnectionUtil;
import com.revature.util.HttpException;

public class LoginDao {
	public User getPasswordByUsername(String username) {
		try(Connection conn = ConnectionUtil.getConnection()) {
			String sql = "SELECT * FROM ers_users WHERE ers_username = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, username);
			ResultSet rs = ps.executeQuery();
			
			if(rs.next()) {
				String password = rs.getString("ers_password");
				int id = rs.getInt("ers_user_id");
				String first_name = rs.getString("user_first_name");
				String last_name = rs.getString("user_last_name");
				String email = rs.getString("user_email");
				int role = rs.getInt("user_role_id");
				return new User(id, username, password, first_name, last_name, email, role);
			} else {
				throw new HttpException(400);
			}
			
		} catch(SQLException e) {
			e.printStackTrace();
			throw new HttpException(500);
		}
	}
}
