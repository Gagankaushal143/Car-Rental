
export const Pagination = ({currentPage, totalPages, setPage}) => {
  return (
    <div className="flex items-center justify-center gap-5 py-10">
        <div>
            <button disabled={currentPage === 1} onClick={() => setPage((prev) => prev - 1)} className="px-5 py-2 rounded-xl border border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">← Previous</button>
        </div>

        <div>
            <p>Page {currentPage} of {totalPages}</p>
        </div>

        <div>
            <button disabled={currentPage === totalPages} onClick={() => setPage((prev) => prev + 1)} className="px-5 py-2 rounded-xl border border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">Next →</button>
        </div>
    </div>
  )
}
    