import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div className='flex flex-col items-center p-8 text-center'>
      <img
        src={user?.picture}
        alt={user?.name}
        className='w-32 h-32 rounded-full mb-4 border'
      />
      <h1 className='text-2xl font-bold mb-2'>{user?.name}</h1>
      <p className='text-lg'>{user?.email}</p>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div className='text-center p-4'>Redirecting to login...</div>,
});
