import { auth } from '../../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export function GoogleSignIn() {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <button 
      className="google-sign-in" 
      onClick={handleGoogleSignIn}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1920px-Google_%22G%22_logo.svg.png" 
        alt="Google logo" 
      />
      Sign in with Google
    </button>
  );
} 