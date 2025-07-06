"use client";

function FallbackRender({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
            <button style={{ backgroundColor: '#ff6347' , color: 'white', padding: 4, fontSize: 12}}
                    onClick={resetErrorBoundary}>TRY AGAIN</button>
        </div>
    );
}
export default FallbackRender