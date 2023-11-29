import '../Filter/Filter.Module.css';

export default function Filter({ onSortChange }) {
    return (
        <>
            <div className="filterContainer">
                <select onChange={onSortChange}>
                    <option value="Trending">Trending</option>
                    <option value="New">Date (Newest to Oldest)</option>
                    <option value="Old">Date (Oldest to Newest)</option>
                </select>
            </div>
        </>
    );
}
