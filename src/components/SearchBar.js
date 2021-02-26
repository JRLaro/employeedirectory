import React from 'react'

export default function SearchBar() {
    return (
        <div className="container">
    <div class="input-group rounded">
  <input type="search" class="form-control rounded border-5 border-dark" placeholder="Search" aria-label="Search"
    aria-describedby="search-addon" />
  <span class="input-group-text border-5 bg-success text-white border-success" id="search-addon">
    <i class="fas fa-search"></i>
                </span>
                
</div>
        </div>
    )
}
