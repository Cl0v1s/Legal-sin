
import env from './../env.json';

async function request(uri, body = null, method = "GET") {
    const headers = {
            'Authorization': `Bearer ${env.api}`
    };
    if(method !== "GET") {
        headers["Content-Type"] = "application/json";
    }
    const request = await fetch(uri, {
        method,
        headers,
        body
    });
    return request.json();
}

function get(collection, filters = {}) {
    return request(`${env.endpoint}/api/collections/get/${collection}`, JSON.stringify({ data: filters }), "POST");
}

function save(collection, entry) {
    return request(`${env.endpoint}/api/collections/save/${collection}`, JSON.stringify({ data: entry }), "POST");
}

function remove(collection, filters = {}) {
    return request(`${env.endpoint}/api/collections/remove/${collection}`, JSON.stringify({ data: filters }), "POST");
}