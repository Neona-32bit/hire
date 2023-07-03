import NavBar from "./Navbar"
import c1 from './imgs/c1.jpeg'
import searchData from './searchData'
import { useState,useEffect } from "react"
export default function Search(){
    
const [items, setItems] = useState(searchData);
const [q, setQ] = useState("");
       
        const [searchParam] = useState(["country", "title"]);
        const [filterParam, setFilterParam] = useState(["All"]);
        function search(items) {
            return items.filter((item) => {
        
                if (item.country == filterParam) {
                    return searchParam.some((newItem) => {
                        return (
                            item[newItem]
                                .toString()
                                .toLowerCase()
                                .indexOf(q.toLowerCase()) > -1
                        );
                    });
                } else if (filterParam == "All") {
                    return searchParam.some((newItem) => {
                        return (
                            item[newItem]
                                .toString()
                                .toLowerCase()
                                .indexOf(q.toLowerCase()) > -1
                        );
                    });
                }
            });
        }
    
        function searchj(items) {
        
            return items.filter((item) => {
        
            if (item.country == filterParam) {
                return searchParam.some((newItem) => {
                  return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                             );
                         });
                     } else if (filterParam == "All") {
                         return searchParam.some((newItem) => {
                             return (
                                 item[newItem]
                                     .toString()
                                     .toLowerCase()
                                     .indexOf(q.toLowerCase()) > -1
                             );
                         });
                     }
                 });
             }
     
    return(
        <div>
            <NavBar />
            <div className="search-h">
                <h2>Hire Now</h2>
                <div className="search-el">
                <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                             <select
                                        onChange={(e) => {
                                        setFilterParam(e.target.value);
                                        }}
                                        className="custom-select"
                                        aria-label="Filter Countries By Region">
                                        <option value="All">All Regions</option>
                                        <option value="USA">USA</option>
                                        <option value="India">India</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="Remote">Remote</option>
                                        </select>
                                        
        
                                
                                </div>
                        </div>
            <div className="results-cont">
            {search(items).map(item => (
            <div className="cand-cont">
            <h4>{item.title}</h4>
                <div className="cand-c1">
                    <div className="cand-img">
                    <img src={item.imgs} />
                    </div>
                    <div className="cand-info">
                        <div className="cand-name">
                            <span>{item.name}</span>
                            <span>{item.country}</span>
                        </div>
                        <div className="cand-rank">
                            <span>{item.stars} <i className="fa fa-star"></i></span> 
                            <span>{item.reviews} reviews</span>
                        </div>
                    </div>
                    <div className="cand-hourly">
                           <span> {item.rate}</span>
                    </div>
                </div>
                    
                
                <div className="cand-c2">
                    <p>{item.about}
                    </p>
                </div>
            </div>
            ))}
            </div>
            
        </div>
    )
            }