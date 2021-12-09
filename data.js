async function search(lat, lng, query) {
    // setup search parameters
    let ll = lat + "," + lng;
    let response = await axios.get(baseURL+'venues/search', {
        params: {
            'll': ll,
            'client_id': PGS0JLUPXW4PQLUUNUQAVJMR05WR1NBH4150KZENUUGVW4MV,
            'client_secret': IZKAHHSZZPADPX4YRPOS1XPNENFDUR3T0IE2YUG0ZGXXD5RE,
            'v': version,
            'query': query
        }
    })
    return response.data;
}