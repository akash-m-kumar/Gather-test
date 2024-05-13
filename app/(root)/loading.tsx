export default function Loading() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
      </div>
    )
  }