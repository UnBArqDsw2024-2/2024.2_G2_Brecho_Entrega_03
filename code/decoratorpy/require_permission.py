def require_permission(required_role):
    # decorator para controle de acesso
    def decorator(func):
        def wrapper(*args, **kwargs):
            role = kwargs.get('role', None)
            if role != required_role:
                raise PermissionError(f"only '{required_role}' can do this.")
            return func(*args, **kwargs)
        return wrapper
    return decorator
