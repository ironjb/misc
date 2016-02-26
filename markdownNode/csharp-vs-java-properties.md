Hopefully this example will help explain the differences:

In Java you have something like this (copied from src/main/java/com/intgas/cust/domain/User.java)

```java
	public class User {
		// Your private field
		private String username;

		// Your getter
		public String getUsername() {
			return username;
		}

		// Your setter
		public void setUsername(String username) {
			this.username = username;
		}
	}
```

Then somewhere else you have an instance of the User

```java
	// Create instance of User
	User myUser = new User();

	// Setting the Username
	myUser.setUsername("Some User Name");

	// Accessing the Username
	String displayUsername = myUser.getUsername();
```


If I take the Java code above and translate it to C#:

```cs
	// The Short Way (Auto-Property)
	public class User {
		public string Username { get; set; }
	}
```

```cs
	// Or the Long Way
	public class User {
		private string _username;

		public String Username {
			//Your getter
			get { return _username; }

			//Your setter
			set { _username = value; }
		}
	}
```

Then you create an instance of the User

```cs
	// Create instance of User
	User myUser = new User();

	// Setting the Username
	myUser.Username = "Some User Name";

	// Getting the Username
	var displayUsername = myUser.Username;
```
