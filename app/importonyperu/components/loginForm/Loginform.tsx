'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Lock, ArrowRight, EyeClosed, Eye } from 'lucide-react';
import { fetchUserLogin } from "@/app/utils/actions";
import { useTenant } from "@/app/context/TenantContext";

interface LoginFormProps {
    onLoginSuccess: () => void;
}

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
    const { tenant } = useTenant();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // 📌 Obtener el User-Agent (dispositivo)
        const device = navigator.userAgent;
        // 📌 Obtener la IP pública desde una API externa
        let ipAdress = "Unknown";
        try {
            const res = await fetch("https://api64.ipify.org?format=json");
            const data = await res.json();
            ipAdress = data.ip;
        } catch (error) {
            console.error("Error obteniendo la IP:", error);
        }

        try {
            // Simular llamada API
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (!email || !password) {
                setError('Por favor completa todos los campos');
                return;
            }

            const user = await fetchUserLogin(tenant, email, password, device, ipAdress);

            if (!user?.user) {
                console.log('Error de login:', user.message);
                setError(user.message);
                return;
            }

            // LOGIN OK
            onLoginSuccess();

        } catch (err) {
            setError('Error al iniciar sesión');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Correo Electrónico
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setError('')
                        }}
                        disabled={isLoading}
                        className="pl-10 py-3 rounded-lg text-base border-2 border-blue-200 placeholder:text-muted-foreground focus:border-blue-700 focus:outline-none transition-all w-full"
                    />
                </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                    Contraseña
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setError('')
                        }}
                        disabled={isLoading}
                        className="pl-10 py-3 rounded-lg text-base border-2 border-blue-200 placeholder:text-muted-foreground focus:border-blue-700 focus:outline-none transition-all w-full"
                    />

                    <button
                        type="button"
                        // variant="ghost"
                        // size="icon"
                        className="absolute right-0 top-0 h-full px-3 text-gray3"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ?
                            <EyeClosed className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                            : <Eye className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        }
                    </button>

                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="p-3 bg-red-500/10 border border-red-500 text-red-500 rounded-lg text-sm">
                    {error}
                </div>
            )}

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded w-4 h-4" />
                    <span className="text-foreground/70">Recuerda mi sesión</span>
                </label>
                <a href="#" className="text-blue-700 hover:text-primary/80 font-medium transition-colors">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
            >
                {isLoading ? (
                    <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Iniciando sesión...
                    </>
                ) : (
                    <>
                        Inicia Sesión
                        <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>

            {/* Sign Up Link
      <p className="text-center text-sm text-foreground/70">
        ¿No tienes cuenta?{' '}
        <a href="#" className="text-primary hover:text-primary/80 font-semibold transition-colors">
          Regístrate aquí
        </a>
      </p> */}
        </form>
    );
}
