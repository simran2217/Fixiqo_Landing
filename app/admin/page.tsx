"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Feedback = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  property_type: string;
  maintenance_problem: string;
};

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session) {
      fetchFeedback();
    }
  }, [session]);

  const checkSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    setSession(session);
    setLoading(false);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoginLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoginLoading(false);
      return;
    }

    setSession(data.session);
    setLoginLoading(false);
  };

  const fetchFeedback = async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching feedback:", error);
      setError(error.message);
      return;
    }

    setFeedback(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setFeedback([]);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F8FA] flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-[#F7F8FA] flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF6A00]">
            FIXIQO
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#0B1F3B]">
            Admin Login
          </h1>

          <p className="mt-2 text-gray-600">
            Sign in to access Fixiqo feedback.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0B1F3B]">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#FF6A00]"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#0B1F3B]">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#FF6A00]"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full rounded-lg bg-[#FF6A00] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loginLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FF6A00]">
              FIXIQO
            </p>

            <h1 className="mt-2 text-4xl font-bold text-[#0B1F3B]">
              Feedback Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              See what people are telling us about property maintenance.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[#0B1F3B] hover:bg-gray-50"
          >
            Sign Out
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {feedback.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-gray-600">
              No feedback submissions yet.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#0B1F3B] text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Name
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Email
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Property
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Problem
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {feedback.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-gray-100"
                    >
                      <td className="px-6 py-4 font-medium text-[#0B1F3B]">
                        {item.name}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {item.email}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {item.property_type}
                      </td>

                      <td className="max-w-md px-6 py-4 text-gray-600">
                        {item.maintenance_problem}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}