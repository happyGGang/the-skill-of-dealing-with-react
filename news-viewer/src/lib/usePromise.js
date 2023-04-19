import { useEffect, useState } from 'react';

export default function usePromise(PromiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolve] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await PromiseCreator();
        setResolve(resolved);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
