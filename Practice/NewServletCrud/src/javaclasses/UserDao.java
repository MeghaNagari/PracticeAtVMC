package javaclasses;

public interface UserDao {
	void add(User user);
	void update(User user);
	void delete(String name);
	User getUser(String email);
	

}
