import { useCallback, useEffect, useRef, useState } from 'react';

// Runs an async loader on mount and exposes { data, loading, error, reload }.
// `loader` must be a stable reference (module-level function).
export function useAsync(loader) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  const latest = useRef(0);

  // Discards any in-flight response (on unmount or when a newer request starts).
  const invalidate = useCallback(() => { latest.current++; }, []);

  const load = useCallback(() => {
    const id = ++latest.current;
    loader()
      .then((data) => id === latest.current && setState({ data, loading: false, error: null }))
      .catch((error) => id === latest.current && setState({ data: null, loading: false, error }));
  }, [loader]);

  // Initial state is already "loading", so mount only needs to kick off the request.
  useEffect(() => {
    load();
    return invalidate;
  }, [load, invalidate]);

  const reload = useCallback(() => {
    setState((s) => ({ ...s, loading: true, error: null }));
    load();
  }, [load]);

  return { ...state, reload };
}
