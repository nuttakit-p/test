import base64 from 'base-64';

const decodeBase64 = (encoded: string): string => {
  const decodedPayload = encoded && JSON.parse(base64.decode(encoded));
  return decodedPayload;
};

export default decodeBase64;
