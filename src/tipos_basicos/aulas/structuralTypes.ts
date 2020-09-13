type VerifyFn = (user: User, dbUser: User) => boolean;
type User = { name: string; password: string };

const verify: VerifyFn = (user, dbUser) => {
  if (user.name === dbUser.name) {
    return true;
  }
  return false;
};

const userum = {
  name: 'fabio',
  password: 'celeste',
};
const userdois = {
  name: 'fabio',
  password: 'celeste',
};

const verificado = verify(userum, userdois);
console.log(verificado);
