const UserType = `

enum Role {
    ADMIN
    REVIEWER
    USER
    UNKNOWN
  }

"""
User credentials for login
""" 
type UserType {
    id: String
    """
    User Role
    """
    role: Role
    """
    Email
    """
    email: String
    """
    JWT token
    """
    jwt: String
}
`;

export default [UserType];
