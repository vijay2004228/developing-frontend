//package com.example.thamarai.EvaluationofAP.Jwt;
//
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import com.example.thamarai.EvaluationofAP.Entity.AdminEntity;
//
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import io.jsonwebtoken.security.Keys;
//
//
//@Service
//public class JwtGenerator implements JwtGeneratorInterface {
//	
//	@Value("${jwt.secret}")
//	  private String secret;
//	  @Value("${app.jwttoken.message}")
//	  private String message;
//
//	
//	
//	
//	
//
//	  
//	  @Override
//	  public Map<String, String> generateToken(AdminEntity user) {
//		  
//		  byte[] keyBytes = secret.getBytes();
//		  Keys.hmacShaKeyFor(keyBytes);
//		  
//		 
//		  
//	    String jwtToken = Jwts.builder().setSubject(user.getEmailid()).setIssuedAt(new Date())
//	    		.signWith(SignatureAlgorithm.HS256, "secret").compact();
//	    Map<String, String> jwtTokenGen = new HashMap<>();
//	    jwtTokenGen.put("token", jwtToken);
//	    jwtTokenGen.put("message", message);
//	    return jwtTokenGen;
//	  }
//
//}


package com.example.thamarai.EvaluationofAP.Jwt;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.thamarai.EvaluationofAP.Entity.AdminEntity;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtGenerator implements JwtGeneratorInterface {

    @Value("${jwt.secret}")
    private String secret;
    
    @Value("${app.jwttoken.message}")
    private String message;

    @Override
    public Map<String, String> generateToken(AdminEntity user) {
        // Generate a secure key with at least 256 bits
        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        String jwtToken = Jwts.builder()
            .setSubject(user.getEmailid())
            .setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis()+ 24 * 60 * 60 * 1000))
            .signWith(key)
            .compact();
        
        Map<String, String> jwtTokenGen = new HashMap<>();
        jwtTokenGen.put("token", jwtToken);
        jwtTokenGen.put("message", message);
        return jwtTokenGen;
    }
}