//   my state that needed
  
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
    const [showMenu, setShowMenu] = useState(false);

// hover card design
 <div
      className="position-relative d-inline-block ms-5 text-dark fw-medium"
      onMouseLeave={() => setShowMenu(false)} // close when leaving container
    >
      {/* Main Menu Button */}
      <button
        className="d-flex align-items-center gap-2 bg-light border px-3 py-2 rounded-top"
        onMouseEnter={() => setShowMenu(true)} // open when hover button
      >
        <i className="fas fa-bars"></i>
        <span>Categories</span>
      </button>

      {/* Hover Dropdown */}
      {showMenu && (
        <div
          className="position-absolute bg-white border rounded-bottom shadow d-flex top-100 start-0 zindex-dropdown"
          onMouseEnter={() => setShowMenu(true)} // keep open when hover menu
          onMouseLeave={() => setShowMenu(false)} // close when leaving card
        >
          {/* First Column */}
          <div className="border-end bg-white" style={{ width: "250px" }}>
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`px-3 py-2 category-item ${
                  activeCategory === i ? "bg-light" : ""
                }`}
                onMouseEnter={() => {
                  setActiveCategory(i);
                  setActiveSub(null);
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  {cat.name}
                  {cat.subcategories && (
                    <i className="fas fa-chevron-right small"></i>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          {activeCategory !== null && categories[activeCategory].subcategories && (
            <div className="border-end bg-white" style={{ width: "250px" }}>
              {categories[activeCategory].subcategories.map((sub, j) => (
                <div
                  key={j}
                  className={`px-3 py-2 category-item ${
                    activeSub === j ? "bg-light" : ""
                  }`}
                  onMouseEnter={() => setActiveSub(j)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    {sub.name}
                    {sub.subcategories && (
                      <i className="fas fa-chevron-right small"></i>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Third Column */}
          {activeCategory !== null &&
            activeSub !== null &&
            categories[activeCategory].subcategories?.[activeSub]
              ?.subcategories && (
              <div className="bg-white" style={{ width: "250px" }}>
                {categories[activeCategory].subcategories[
                  activeSub
                ].subcategories.map((item, k) => (
                  <div key={k} className="px-3 py-2 category-item">
                    {item.name}
                  </div>
                ))}
              </div>
            )}
        </div>
      )}
    </div>



/// how swr work

// It’s a data fetching strategy and React hook library that helps you fetch, cache, and update data efficiently — similar to React Query.

// It returns cached (stale) data immediately for fast UI.
// Then it fetches fresh data in the background (revalidate).
// Once new data comes in, it updates the UI automatically.

import useSWR from "swr";

// define a fetcher function
const fetcher = (url) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <div>Hello, {data.name}</div>;
}

// ✅ SWR handles:
// Caching
// Background revalidation
// Refetch on focus
// Refetch on reconnect
// Error retries