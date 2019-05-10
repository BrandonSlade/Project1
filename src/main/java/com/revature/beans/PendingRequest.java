package com.revature.beans;

import java.sql.Timestamp;

public class PendingRequest {
	private int reimbId;
	private double reimbAmount;
	private Timestamp submitted;
	private String description;
	private String receipt;
	private int authorId;
	private int reimbType;
	
	public int getReimbId() {
		return reimbId;
	}
	
	public void setReimbId(int reimbId) {
		this.reimbId = reimbId;
	}
	
	public double getReimbAmount() {
		return reimbAmount;
	}
	
	public void setReimbAmount(double reimbAmount) {
		this.reimbAmount = reimbAmount;
	}
	
	public Timestamp getSubmitted() {
		return submitted;
	}
	
	public void setSubmitted(Timestamp submitted) {
		this.submitted = submitted;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getReceipt() {
		return receipt;
	}
	
	public void setReceipt(String receipt) {
		this.receipt = receipt;
	}
	
	public int getAuthorId() {
		return authorId;
	}
	
	public void setAuthorId(int authorId) {
		this.authorId = authorId;
	}
	
	public int getReimbType() {
		return reimbType;
	}
	
	public void setReimbType(int reimbType) {
		this.reimbType = reimbType;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + authorId;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((receipt == null) ? 0 : receipt.hashCode());
		long temp;
		temp = Double.doubleToLongBits(reimbAmount);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + reimbId;
		result = prime * result + reimbType;
		result = prime * result + ((submitted == null) ? 0 : submitted.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PendingRequest other = (PendingRequest) obj;
		if (authorId != other.authorId)
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (receipt == null) {
			if (other.receipt != null)
				return false;
		} else if (!receipt.equals(other.receipt))
			return false;
		if (Double.doubleToLongBits(reimbAmount) != Double.doubleToLongBits(other.reimbAmount))
			return false;
		if (reimbId != other.reimbId)
			return false;
		if (reimbType != other.reimbType)
			return false;
		if (submitted == null) {
			if (other.submitted != null)
				return false;
		} else if (!submitted.equals(other.submitted))
			return false;
		return true;
	}
	
	@Override
	public String toString() {
		return "PendingRequest [reimbId=" + reimbId + ", reimbAmount=" + reimbAmount + ", submitted=" + submitted
				+ ", description=" + description + ", receipt=" + receipt + ", authorId=" + authorId + ", reimbType="
				+ reimbType + "]";
	}
	
	public PendingRequest(int reimbId, double reimbAmount, Timestamp submitted, String description, String receipt,
			int authorId, int reimbType) {
		super();
		this.reimbId = reimbId;
		this.reimbAmount = reimbAmount;
		this.submitted = submitted;
		this.description = description;
		this.receipt = receipt;
		this.authorId = authorId;
		this.reimbType = reimbType;
	}
	
	public PendingRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
