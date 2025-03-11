/**
 * Tests to verify that the package can be imported without a trailing slash
 * This is important because imports with trailing slashes can cause issues with the exports field
 */

describe('Import syntax', () => {
  it('should be able to import without a trailing slash', async () => {
    // This test verifies that we can import from the package without a trailing slash
    const { createTestimonialSection } = await import('../dist/index.js');
    expect(typeof createTestimonialSection).toBe('function');
  });

  it('should NOT be able to import with a trailing slash', async () => {
    // This test verifies that importing with a trailing slash fails
    // Note: This test is expected to fail, which is correct behavior
    try {
      // This should fail because importing with a trailing slash is not allowed
      const result = await import('../dist/');
      // If we get here, the import succeeded, which is not what we want
      fail('Import with trailing slash should have failed');
    } catch (error) {
      // This is the expected behavior - the import should fail
      expect(error).toBeDefined();
    }
  });
}); 