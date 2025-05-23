from django.contrib.auth.base_user import BaseUserManager


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self,username, email, password, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not username:
            raise ValueError("user shoudn't be empty")
        if not email:
            raise ValueError("Email shoudn't be empty")
        if not password:
            raise ValueError("Password shoudn't be empty")
        email = self.normalize_email(email)

        user = self.model(email=email, **extra_fields)
        user.set_username(username)
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")
        return self.create_user(email, password, **extra_fields)