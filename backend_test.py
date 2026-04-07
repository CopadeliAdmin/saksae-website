#!/usr/bin/env python3
import requests
import sys
import json
from datetime import datetime

class SaksaeAPITester:
    def __init__(self, base_url="https://centralise-activate.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.session = requests.Session()
        self.tests_run = 0
        self.tests_passed = 0
        self.admin_token = None
        self.user_token = None

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None, cookies=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        test_headers = {'Content-Type': 'application/json'}
        if headers:
            test_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = self.session.get(url, headers=test_headers, cookies=cookies)
            elif method == 'POST':
                response = self.session.post(url, json=data, headers=test_headers, cookies=cookies)
            elif method == 'PUT':
                response = self.session.put(url, json=data, headers=test_headers, cookies=cookies)
            elif method == 'DELETE':
                response = self.session.delete(url, headers=test_headers, cookies=cookies)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            return success, response

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_health_check(self):
        """Test API health check"""
        success, response = self.run_test(
            "API Health Check",
            "GET",
            "",
            200
        )
        return success

    def test_admin_login(self):
        """Test admin login"""
        success, response = self.run_test(
            "Admin Login",
            "POST",
            "auth/login",
            200,
            data={
                "email": "admin@saksae.com",
                "password": "SaksaeAdmin2024!"
            }
        )
        if success and response:
            try:
                data = response.json()
                if 'id' in data:
                    print(f"   Admin ID: {data['id']}")
                    print(f"   Admin Role: {data.get('role', 'N/A')}")
                # Check for httpOnly cookies
                if 'Set-Cookie' in response.headers:
                    print(f"   Cookies set: {response.headers['Set-Cookie']}")
                return True
            except:
                pass
        return False

    def test_user_registration(self):
        """Test user registration"""
        timestamp = datetime.now().strftime("%H%M%S")
        test_email = f"test_user_{timestamp}@example.com"
        
        success, response = self.run_test(
            "User Registration",
            "POST",
            "auth/register",
            200,
            data={
                "email": test_email,
                "password": "TestPassword123!",
                "name": "Test User",
                "company": "Test Company"
            }
        )
        if success and response:
            try:
                data = response.json()
                if 'id' in data:
                    print(f"   User ID: {data['id']}")
                    print(f"   User Role: {data.get('role', 'N/A')}")
                return True, test_email
            except:
                pass
        return False, None

    def test_duplicate_registration(self):
        """Test duplicate email registration"""
        success, response = self.run_test(
            "Duplicate Registration (should fail)",
            "POST",
            "auth/register",
            400,
            data={
                "email": "admin@saksae.com",  # Already exists
                "password": "TestPassword123!",
                "name": "Duplicate User"
            }
        )
        return success

    def test_user_login(self, email, password):
        """Test user login"""
        success, response = self.run_test(
            "User Login",
            "POST",
            "auth/login",
            200,
            data={
                "email": email,
                "password": password
            }
        )
        return success

    def test_invalid_login(self):
        """Test invalid login credentials"""
        success, response = self.run_test(
            "Invalid Login (should fail)",
            "POST",
            "auth/login",
            401,
            data={
                "email": "nonexistent@example.com",
                "password": "wrongpassword"
            }
        )
        return success

    def test_lead_creation(self):
        """Test lead creation"""
        success, response = self.run_test(
            "Lead Creation",
            "POST",
            "leads",
            200,
            data={
                "email": "lead@example.com",
                "name": "Test Lead",
                "company": "Lead Company",
                "phone": "+1234567890",
                "message": "Interested in SAKSAE",
                "source": "landing_page"
            }
        )
        return success

    def test_roi_calculation(self):
        """Test ROI calculation saving"""
        success, response = self.run_test(
            "ROI Calculation",
            "POST",
            "roi-calculations",
            200,
            data={
                "team_size": 10,
                "actions_per_day": 5,
                "time_per_action": 30,
                "value_per_action": 50.0,
                "conversion_rate": 20.0,
                "monthly_revenue": 11000.0,
                "annual_revenue": 132000.0,
                "email": "roi@example.com"
            }
        )
        return success

    def test_contact_form(self):
        """Test contact form submission"""
        success, response = self.run_test(
            "Contact Form",
            "POST",
            "contact",
            200,
            data={
                "email": "contact@example.com",
                "name": "Contact User",
                "message": "This is a test contact message"
            }
        )
        return success

    def test_newsletter_subscription(self):
        """Test newsletter subscription"""
        timestamp = datetime.now().strftime("%H%M%S")
        success, response = self.run_test(
            "Newsletter Subscription",
            "POST",
            "newsletter",
            200,
            data={
                "email": f"newsletter_{timestamp}@example.com"
            }
        )
        return success

    def test_duplicate_newsletter(self):
        """Test duplicate newsletter subscription"""
        # First subscription
        email = "duplicate@example.com"
        self.run_test(
            "First Newsletter Subscription",
            "POST",
            "newsletter",
            200,
            data={"email": email}
        )
        
        # Duplicate subscription (should still return 200 but with different message)
        success, response = self.run_test(
            "Duplicate Newsletter Subscription",
            "POST",
            "newsletter",
            200,
            data={"email": email}
        )
        return success

    def test_logout(self):
        """Test logout"""
        success, response = self.run_test(
            "Logout",
            "POST",
            "auth/logout",
            200
        )
        return success

def main():
    print("🚀 Starting SAKSAE API Tests")
    print("=" * 50)
    
    tester = SaksaeAPITester()
    
    # Test sequence
    tests = [
        ("Health Check", tester.test_health_check),
        ("Admin Login", tester.test_admin_login),
        ("User Registration", lambda: tester.test_user_registration()[0]),
        ("Duplicate Registration", tester.test_duplicate_registration),
        ("Invalid Login", tester.test_invalid_login),
        ("Lead Creation", tester.test_lead_creation),
        ("ROI Calculation", tester.test_roi_calculation),
        ("Contact Form", tester.test_contact_form),
        ("Newsletter Subscription", tester.test_newsletter_subscription),
        ("Duplicate Newsletter", tester.test_duplicate_newsletter),
        ("Logout", tester.test_logout),
    ]
    
    # Test user login with registered user
    reg_success, test_email = tester.test_user_registration()
    if reg_success and test_email:
        tests.append(("User Login", lambda: tester.test_user_login(test_email, "TestPassword123!")))
    
    # Run all tests
    for test_name, test_func in tests:
        try:
            test_func()
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {str(e)}")
    
    # Print summary
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())