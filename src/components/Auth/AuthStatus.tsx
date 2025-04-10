import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';

export function AuthStatus() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="auth-status loading">Loading...</div>;
  }

  if (!user) {
    return <div className="auth-status">Not logged in</div>;
  }

  return (
    <div className="auth-status">
      <p>Logged in as {user.email}</p>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
} 