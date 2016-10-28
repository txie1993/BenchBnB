class User < ActiveRecord::Base
  attr_reader :password
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize: ensure_session_token

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end
end
