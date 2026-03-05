/*global Ultraviolet*/
self.__uv$config = {
    prefix: "/uv/service/",
    
    /* PRO TIP: if google is trippin', it's often because the 'bare' server 
       IP is blacklisted. using a public bare server like 
       'https://uv.student-portal.xyz/bare/' (if yours is down) 
       can sometimes bypass those 'suspicious activity' blocks. 
    */
    bare: "/b/", 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/uv.handler.js",
    client: "/uv/uv.client.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "/uv/uv.sw.js",

    /* injecting a custom user-agent can sometimes help, 
       but ultraviolet usually handles this in the client. 
    */
};
