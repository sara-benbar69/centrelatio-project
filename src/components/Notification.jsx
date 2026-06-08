function Notification({ type = 'success', message = '' }) {
  if (!message) {
    return null;
  }

  return (
    <div className={`notification ${type}`} role="alert">
      {message}
    </div>
  );
}

export default Notification;
