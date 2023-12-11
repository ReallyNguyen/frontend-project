import '../Filter/Filter.Module.css';

export default function Filter({ onSortChange }) {
    return (
        <>
            <div className="filterContainer">
                <select className="filterText" onChange={onSortChange}>
                    <option value="New">Date (Newest to Oldest)</option>
                    <option value="Old">Date (Oldest to Newest)</option>
                    <option value="Trending">Trending</option>
                </select>
            </div>
        </>
    );
}
